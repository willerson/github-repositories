import { VariantProps, tv } from 'tailwind-variants';

const styles = tv({
  base: 'border rounded-full w-10 h-10 flex items-center justify-center transition-colors',
  variants: {
    state: {
      true: 'border-primary',
      false: 'bg-white-matte',
    },
  },
});

interface FavoriteProps extends VariantProps<typeof styles> {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Favorite = ({ className, onClick, children, state }: FavoriteProps) => {
  return (
    <button onClick={onClick} className={styles({ class: className, state })}>
      {children}
    </button>
  );
};

export default Favorite;
