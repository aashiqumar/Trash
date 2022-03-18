window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.getElementById("#new-task-input");
    const list_el= document.querySelector("#task-list");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.ariaValueText;
        

        if(!task)
        {
            alert("Please Write a Task!")
        }
        else {
            console.log("sucess")
        }
    })
})