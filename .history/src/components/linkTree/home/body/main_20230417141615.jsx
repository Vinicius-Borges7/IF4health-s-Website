import Links from './links';

// const style = {
//     margin-top:
// }

export default function Main(){
    return(
        <section className="mt1">
            <a name="linktrees"></a>
            <h2>Link Trees</h2>
            <div id="alunosCarousel" data-ride="carousel">
                <Links/>
            </div>
        </section>   
    )
}