let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1;
        }
    };
    request.send();
};
//请求Json
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/5.json");
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    }
    request.send()
}

//请求JSON
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/4.xml");
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            const dom = request.responseXML;
            const text = document.getElementsByTagName('warning').textContent;
            console.log(text);
        }
    };
    request.send()
};

//div请求
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {

        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {}
    request.send();
}

//script请求
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        //创建script标签   填写内容  插到body
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)

    }
    request.onerror = {}
    request.send()
};

//style请求
getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', "/style.css");
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState == 4) {
            console.log('下载完成');
        }

        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)

    };
    request.send()
};