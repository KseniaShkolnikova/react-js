import React from "react";

class Header extends React.Component{

    render() {
        return (
          <header className="head">
              <div ><p style={{margin:10}}><b  className="zagolovok">FUTUREㅤ</b>
                  <a href="https://classroom.google.com/u/0/c/NjU0MjcxOTU5NTM5?hl=ru" className="CCILK">Coursesㅤ </a>
                  <a  href="https://classroom.google.com/u/0/a/turned-in/all?hl=ru" className="CCILK">Projectㅤ</a>
                  <a href="https://vk.com/seshashk" className="CCILK">Blogsㅤ </a>
                  <a href="/join" className="crug" style={{fontSize: 17}}>ㅤJoin nowㅤ</a>
              </p> </div>
    </header>
        )
    }
}

export default Header