import { LoaderStyled } from './Loader.styled';

export const Loader = ({ nextPage }) => {
  return <LoaderStyled onClick={nextPage}>Load more</LoaderStyled>;
};
