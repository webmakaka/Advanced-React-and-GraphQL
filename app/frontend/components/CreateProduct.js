import Form from 'components/styles/Form';
import userForm from 'lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange, resetForm, clearForm } = userForm({
    image: '',
    name: 'Nice Shoes',
    price: 120,
    descripton: 'THese are the best shoes!',
  });

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(inputs);
      }}
    >
      <fieldset>
        <label htmlFor="image">
          Image
          <input type="file" id="image" name="image" onChange={handleChange} />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="descripton">
          Deacription
          <textarea
            id="descripton"
            name="descripton"
            placeholder="Descripton"
            value={inputs.descripton}
            onChange={handleChange}
          />
        </label>
        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
