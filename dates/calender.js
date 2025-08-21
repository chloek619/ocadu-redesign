// 임시 데이터
const data = [
    { date: '2022-09-05', content: '⭐️'},
    { date: '2022-09-07', content: '⭐️'},
    { date: '2022-09-09', content: '⭐️'},
    { date: '2022-09-13', content: '⭐️⭐️⭐️'},
    { date: '2022-09-20', content: '⭐️⭐️⭐️'},
    { date: '2022-09-30', content: '⭐️'},

    { date: '2022-10-04', content: '⭐️⭐️'},
    { date: '2022-10-10', content: '⭐️'},
    { date: '2022-10-11', content: '⭐️'},
    { date: '2022-10-18', content: '⭐️'},
    { date: '2022-10-25', content: '⭐️'},
    { date: '2022-11-03', content: '⭐️⭐️⭐️⭐️' },
    { date: '2022-11-08', content: '⭐️⭐️' },
    { date: '2022-11-15', content: '⭐️' },
    { date: '2022-11-25', content: '⭐️' },
    { date: '2022-12-02', content: '⭐️' },
    { date: '2022-12-07', content: '⭐️⭐️⭐️' },
    { date: '2022-12-08', content: '⭐️' },
    { date: '2022-12-09', content: '⭐️' },
    { date: '2022-12-14', content: '⭐️' },
    { date: '2022-12-21', content: '⭐️' },
    { date: '2022-12-22', content: '⭐️' },
    { date: '2022-12-23', content: '⭐️' },

  ];
  
  // 데이터 가공
  const calendarList = data.reduce(
    (acc, v) => 
      ({ ...acc, [v.date]: [...(acc[v.date] || []), v.content] })
    , {}
  );
  
  // pad method
  Number.prototype.pad = function() {
    return this > 9 ? this : '0' + this;
  }
  
  // 달력 생성
  const makeCalendar = (date) => {
    // 현재의 년도와 월 받아오기
    const currentYear = new Date(date).getFullYear();
    const currentMonth = new Date(date).getMonth() + 1;
  
    // 한달전의 마지막 요일
    const firstDay = new Date(currentYear, currentMonth - 1, 1).getDay();
    // 현재 월의 마지막 날 구하기
    const lastDay = new Date(currentYear, currentMonth, 0).getDate();
  
    // 남은 박스만큼 다음달 날짜 표시
    const limitDay = firstDay + lastDay;
    const nextDay = Math.ceil(limitDay / 7) * 7;
  
    let htmlDummy = '';
  
    // 한달전 날짜 표시하기
    for (let i = 0; i < firstDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }
  
    // 이번달 날짜 표시하기
    for (let i = 1; i <= lastDay; i++) {
      const date = `${currentYear}-${currentMonth.pad()}-${i.pad()}`
      
      htmlDummy += `
        <div>
          ${i}
          <p>
            ${calendarList[date]?.join('</p><p>') || ''}
          </p>
        </div>
      `;
    }
  
    // 다음달 날짜 표시하기
    for (let i = limitDay; i < nextDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }
    
    document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
    document.querySelector(`.dateTitle`).innerText = `${currentYear} / ${currentMonth}`;
  }
  
  const date = new Date('2022-10-10');
  
  makeCalendar(date);
  
  // 이전달 이동
  document.querySelector(`.prevDay`).onclick = () => {
  makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
  }
  
  // 다음달 이동
  document.querySelector(`.nextDay`).onclick = () => {
  makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
  }







  