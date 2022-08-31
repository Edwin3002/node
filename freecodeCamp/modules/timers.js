function showTopics(topic){
    console.log(`Estoy aprendiendo ${topic}`);
}

// showTopics('Node');

setTimeout(showTopics, 3000, 'python')
setImmediate(showTopics, 'javascript')
setInterval(showTopics, 5000, 'php')