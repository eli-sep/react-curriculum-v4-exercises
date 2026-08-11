import { useEffect, useState } from 'react';
import styles from './SnackForm.module.css';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const isEditing = Boolean(editingSnack);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({ name: false, rating: false });
  useEffect(() => {
    if (isEditing) {
      setName(editingSnack.name);
      setRating(editingSnack.rating);
    } else {
      setName('');
      setRating('');
    }

    setTouched({ name: false, rating: false });
  }, [editingSnack]);

  const validateName = () => name.trim() !== '';
  const validateRating = () => rating !== '';
  const getNameError = () =>
    !validateName() && touched.name && 'Snack name is required';
  const getRatingError = () =>
    !validateRating() && touched.rating && 'Please select a rating';

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const name = formData.get('name');
  //   const rating = formData.get('rating');

  //   if (isEditing) {s
  //     updateSnack(editingSnack.id, name, rating);
  //   } else {
  //     addSnack(name, rating);
  //     e.target.reset();
  //   }
  // }

  return (
    <form
      // onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          className={styles['field-input']}
          placeholder="Enter snack name"
          onChange={(event) => setName(event.target.value)}
          onFocus={() => {
            setTouched((prev) => ({ ...prev, name: true }));
          }}
        />
        {getNameError() && <div className={styles.error}>{getNameError()}</div>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating}
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
          onChange={(event) => setRating(event.target.value)}
          onFocus={() => {
            setTouched((prev) => ({ ...prev, rating: true }));
          }}
        />
        {getRatingError() && (
          <div className={styles.error}>{getRatingError()}</div>
        )}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
