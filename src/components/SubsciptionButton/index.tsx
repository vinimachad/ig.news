import styles from './styles.module.scss';

interface SubsciptionButtonProps {
  productId: string
}

export const SubsciptionButton = ({ priceId }: SubsciptionButtonProps) => {
  return (
    <>
      <button
        type='button'
        className={styles.subscribeButton}>
        Subscribe now
      </button>
    </>
  );
};
