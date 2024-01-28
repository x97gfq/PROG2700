document.getElementById('madLibsForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const noun = document.getElementById('noun').value;
    const verb = document.getElementById('verb').value;
    const adjective = document.getElementById('adjective').value;

    const story = `The ${adjective} ${noun} decided to ${verb} at the worst possible moment.`;
    
    document.getElementById('story').innerText = story;
});
