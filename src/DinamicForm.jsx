import { useImmer } from 'use-immer';

let nextId = 3;

export default function DinamicForm() {
  const [fields, setFields] = useImmer([
    { id: 1, value: `Value for field 1` },
    { id: 2, value: `Value for field 2` },
  ]);

  function handleChange(id, value) {
    setFields((draft) =>
      draft.map((field) => (field.id === id ? { id, value } : field))
    );
  }

  function handleRemove(id) {
    setFields((draft) => draft.filter((field) => field.id !== id));
  }

  function handleAdd() {
    setFields([...fields, { id: nextId++, value: '' }]);
  }

  return (
    <div className="dinamic-form mb-5">
      <h1>Dynamic Form</h1>
      <form>
        {fields.map((field) => (
          <div key={field.id} className="mb-3 field">
            <div className="form-group">
              <label htmlFor={field.id}>Field {field.id}</label>
              <input
                type="text"
                className="form-control"
                id={field.id}
                value={field.value}
                placeholder={
                  field.value.length === 0
                    ? `Enter value for field ${field.id}`
                    : ''
                }
                onChange={(e) => handleChange(field.id, e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-danger mt-4"
              onClick={() => handleRemove(field.id)}>
              Remove
            </button>
          </div>
        ))}
      </form>
      <button
        type="button"
        className="btn btn-secondary mb-4"
        onClick={() => handleAdd()}>
        Add Field
      </button>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Form Values</h5>
          {fields.map((field) => (
            <p
              key={field.id}
              className="card-text">{`Field ${field.id}: ${field.value}`}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
