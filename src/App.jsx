
const App = () => {
  const [title, setTitle] = useState('The full name will appear here.');
  const [firstName, setFirstName] = useState('');

   const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
    const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };



  return (
    <>
      <h2>{title}</h2>
      <form>
        <label htmlFor="firstName">First Name: </label>
        <input
          id="firstName"
          value={firstName}
          <label htmlFor="lastName">Last Name: </label>
        <input
          id="lastName"
          value={lastName}
        />
      </form>
    </>

  );
};
