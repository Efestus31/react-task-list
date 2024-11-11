export default function AppMain() {


    const tasks = [
        {
            id: 1,
            title: "Implementare la homepage",
            priority: 1,
            estimatedTime: 120,
            state: "completed"
        },
        {
            id: 2,
            title: "Sviluppare il menu di navigazione",
            priority: 2,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 3,
            title: "Creare il footer del sito",
            priority: 3,
            estimatedTime: 30,
            state: "completed"
        },
        {
            id: 4,
            title: "Ottimizzare le performance",
            priority: 1,
            estimatedTime: 180,
            state: "completed"
        },
        {
            id: 5,
            title: "Scrivere test per i componenti",
            priority: 2,
            estimatedTime: 90,
            state: "completed"
        },
        {
            id: 6,
            title: "Implementare la pagina dei contatti",
            priority: 3,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 7,
            title: "Aggiungere animazioni CSS",
            priority: 2,
            estimatedTime: 30,
            state: "backlog"
        },
        {
            id: 8,
            title: "Integrare l'API di autenticazione",
            priority: 1,
            estimatedTime: 120,
            state: "in_progress"
        },
        {
            id: 9,
            title: "Aggiornare la documentazione",
            priority: 3,
            estimatedTime: 60,
            state: "backlog"
        },
        {
            id: 10,
            title: "Rifattorizzare il codice CSS",
            priority: 2,
            estimatedTime: 90,
            state: "in_progress"
        }
    ];

    /* console.log(tasks); */

    const completedTasks = tasks.filter(task => task.state === 'completed');
    const uncompletedTasks = tasks.filter(task => task.state !== 'completed')

    /* console.log(completedTasks);
    console.log('div');
    console.log(uncompletedTasks); */
    return (
        <>
            <section className="tasks">
                <h2>Current Tasks (4)</h2>
                <ul>
                    {uncompletedTasks.map(task => (
                        <li key={task.id}>
                            <strong> {task.title} </strong> <span className="bg">{task.state}</span><br />
                            Priority: {task.priority}<br />
                            Est. time {task.estimatedTime}<br />
                        </li>
                    ))}
                </ul>
                <hr />
                <h2>Completed Tasks (6)</h2>
                <ul>
                    {completedTasks.map(task => (
                        <li key={task.id}>
                            <strong> {task.title} </strong> <span className="bg">{task.state}</span> <br />
                            Priority: {task.priority}<br />
                            Est. time {task.estimatedTime}<br />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}