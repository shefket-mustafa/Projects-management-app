import './addProject.css';

export default function AddProject({ addProject }) {

  return (
    <>
        <div className="add-projects">

            

            <div className='add-form'>
            <form action={(formData) => {
                addProject(Object.fromEntries(formData));
            }}>
                <div className="cancel-save-btns">
                <button className='cancel'>Cancel</button>
                <button className='save' type='submit'>Save</button>
            </div>


                <label htmlFor="title">TITLE</label>
                <input type="text" name="title" required/>

                <label htmlFor="description">DESCRIPTION</label>
                <textarea name="description" id="description" required></textarea>

                <label htmlFor="date">DUE DATE</label>
                <input type="date" name="date" id="date" required/>
            </form>
            </div>
        </div>
    </>
      
    );
}