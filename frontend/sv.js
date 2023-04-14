lst = [];
curItem = null;
$(function () {
    getStudents();
});
function getStudents() {
    fetch("http://localhost:3000/students")
        .then(res => {return res.json();})
        .then(data => {
            lst = [];
            let i=1;
            data.forEach(sv => {
                sv.STT = i++;
                lst.push(sv);
            });
            if (lst.length > 0) {
                $("#tbodySV").html("");
                $("#svTemplate").tmpl(lst).appendTo("#tbodySV");
            }
            else {
                str = "<caption>No DATA FOUND</caption>"
                $("#tbodySV").html(str);
            }
        })
        .catch(err => {
            str = "<caption>ERROR .....</caption>"
            $("#tbodySV").html(str);
        })
}