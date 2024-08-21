import { ListItem } from "./Item/Item";
import { ListProvider, ListType } from "./List.context";
import { styles } from "./List.styles";

interface IListProps {
  type: ListType;
  className?: string;
  children: React.ReactNode;
}

const Component = ({ type, className, children }: IListProps): JSX.Element => {
  const classes = `${styles[type].menu} ${className || ""}`;

  return (
    <ul className={classes}>
      <ListProvider value={{ type }}>{children}</ListProvider>
    </ul>
  );
};

export const List = Object.assign(Component, {
  Item: ListItem,
});
