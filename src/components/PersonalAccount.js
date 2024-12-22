import React, { useState } from 'react';
import '../styles/PersonalAccount.css';

function PersonalAccount() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null); // Состояние для выбранного дня
  const [plans, setPlans] = useState(''); // Состояние для текстовых планов

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = new Date().getDate();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const nextYear = () => {
    setCurrentDate(new Date(currentYear + 1, currentMonth, 1));
  };

  const prevYear = () => {
    setCurrentDate(new Date(currentYear - 1, currentMonth, 1));
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  const calendarDays = [];
  for (let i = 0; i < (firstDayIndex === 0 ? 6 : firstDayIndex - 1); i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  // Обработчик клика по дню
  const handleDayClick = (day) => {
    setSelectedDay(day);
    setPlans(''); // Очищаем планы при выборе нового дня
  };

  return (
    <div className="container">
      <div className="centered">
        <div className="profile">
          <img
            className="avatar"
            src="https://i.postimg.cc/LsgFncFS/temp-Image-UQYavg.avif"
            alt="Profile"
          />
          <h1>Dashula</h1>
          <p>shtompel.dasha@gmail.com</p>
        </div>
      </div>

      <div className="events">
        <h2>List of events</h2>
        <ul>
          <li>Event 1</li>
          <li>Event 2</li>
          <li>Event 3</li>
        </ul>
      </div>

      <div className="calendar">
        <h2>Your calendar</h2>
        <div className="controls">
          <button onClick={prevYear}>Previous Year</button>
          <button onClick={prevMonth}>Previous Month</button>
          <span>
            {monthNames[currentMonth]} {currentYear}
          </span>
          <button onClick={nextMonth}>Next Month</button>
          <button onClick={nextYear}>Next Year</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>MON</th>
              <th>TUE</th>
              <th>WED</th>
              <th>THU</th>
              <th>FRI</th>
              <th>SAT</th>
              <th>SUN</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.ceil(calendarDays.length / 7) }).map(
              (_, rowIndex) => (
                <tr key={rowIndex}>
                  {calendarDays.slice(rowIndex * 7, rowIndex * 7 + 7).map((day, index) => (
                    <td
                      key={index}
                      className={`${
                        day === currentDay &&
                        currentMonth === new Date().getMonth() &&
                        currentYear === new Date().getFullYear()
                          ? 'highlight'
                          : ''
                      } ${
                        selectedDay === day ? 'selected-day' : '' // Подсветка выбранного дня
                      }`}
                      onClick={() => handleDayClick(day)} // Добавляем обработчик клика
                    >
                      {day || ''}
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Окно с планами на выбранный день */}
      {selectedDay && (
        <div className="plans">
          <h3>Plans for {selectedDay} {monthNames[currentMonth]} {currentYear}</h3>
          <textarea
            rows="4"
            cols="50"
            placeholder="Enter your plans here..."
            value={plans}
            onChange={(e) => setPlans(e.target.value)} // Обновляем планы при вводе
          />
        </div>
      )}
    </div>
  );
}

export default PersonalAccount;
