import { Specie } from "../../../Models/species";

interface SpecieListItemProps {
  specie: Specie;
}

const SpecieListItem = (props: SpecieListItemProps) => {
  return (
    <>
      <tr>
        <td>
          <label>{props.specie.name}</label>
        </td>
      </tr>
    </>
  );
};

export default SpecieListItem;
