// modules //

const bucketUrl = "http://localhost:8080/";

export default function renderLinks(data){
    let key = 0;
    let list = [];

    data.forEach((e) => {
        key += 1;

        list.push(
            <div>
                <a href={`/LinkTreePage?LinkId=${e.id}`}>e.tittle</a><br/>
            </div>
        );  
    });
    return list;
}