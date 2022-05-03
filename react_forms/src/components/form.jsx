export const Form = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter Name"/>
        <input type="text" placeholder="Enter Age"/>
        <input type="text" placeholder="Enter Address"/>
        <select name="department" id="">
            <option value="">Department</option>
            <option value="">English</option>
            <option value=""></option>
            <option value=""></option>
        </select>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
    </div>
  );
};
