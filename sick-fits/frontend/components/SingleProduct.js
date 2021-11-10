import gql from 'graphql-tag';
import useQuery from '@apollo/client';
import DisplayError from './ErrorMessage';

const SINGLE_ITEM_QUERY = gql`
  query {
    Product(where: { id: "61840cbe2262e924db10d92c" }) {
      name
      price
      description
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY);
  if (loading) return <p>loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <div>
      <h2>{data.product.name}</h2>
    </div>
  );
}
