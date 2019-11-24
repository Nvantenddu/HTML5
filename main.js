// Name: NIKHIL REDDY VANTENDDU


var myNodelist = document.getElementsByTagName("LI");
        var i;
        for (i = 0; i < myNodelist.length; i++) {
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "remove";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
        }

        var remove = document.getElementsByClassName("remove");
        var i;
        for (i = 0; i < remove.length; i++) {
            remove[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }

        // Add a "checked" symbol when clicking on a list item
        var list = document.querySelector('ul');
        list.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
            }
        }, false);

        function addGoal() {
            var li = document.createElement("LI");
            var inputValue = document.getElementById("goal").value;
            var t = document.createTextNode(inputValue);
            li.appendChild(t);
            
            if (inputValue === '') {
                return;
            } else {
                
                document.getElementById("goalsList").appendChild(li);
                
            }
            document.getElementById("goal").value = "";

            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "remove";
            span.appendChild(txt);
            li.appendChild(span);

            for (i = 0; i < remove.length; i++) {
                remove[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }
        }