import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SearchBar } from './SearchBar/SearchBar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { findImages } from 'api';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState(``);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const changeQuery = newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (!query) return;

    const loadResults = async () => {
      try {
        setLoading(true);
        const queryResult = await findImages(query, page);

        if (page === 1 && queryResult.length !== 0) {
          toast.success(`Here we go`, { autoClose: 1000 });
        }

        if (queryResult.length === 0) {
          setLoading(false);
          toast.error(`Sorry, there are no images for your request :C`);
          return;
        }

        setImages(prevState =>
          page > 1 ? [...prevState, ...queryResult] : queryResult
        );

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    loadResults();
  }, [page, query]);

  const handelLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Layout>
      <SearchBar changeQuerry={changeQuery} />
      {loading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
      {images.length > 0 && <ImageGallery imagesArr={images} />}
      {images.length !== 0 && images.length >= 16 && (
        <Loader nextPage={handelLoadMore} />
      )}
      <ToastContainer />
      <GlobalStyle />
    </Layout>
  );
};
