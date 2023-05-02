const day = document.querySelector('#input_date')
const month = document.querySelector('#input_month')
const year = document.querySelector('#input_year')


// function getDateDiff(date1, date2) {
//     const diffTime = Math.abs(date2 - date1);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
//     const diffYears = diffDays / 365;
//     const diffMonths = diffYears * 12;
    
//     return {
//       resulted_days: Math.round(diffDays),
//       resulted_months: Math.round(diffMonths),
//       resulted_years: Math.round(diffYears)
//     };
//   }
 

function getDateDiff(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffYears = Math.floor(diffDays / 365);
    const diffMonths = Math.floor((diffDays % 365) / 30);
    const diffDaysLeft = diffDays - (diffYears * 365) - (diffMonths * 30);
  
    return {
      resulted_years: diffYears,
      resulted_months: diffMonths,
      resulted_days: diffDaysLeft
    };
  }
  

// separador

function transformToDate(days, months, years) {
    return `${years}-${months}-${days}`
}

function isFutureDate(dateString) {
  const date = new Date(dateString);
  const today = new Date();
  return date > today;
}



const day_int = parseInt(day.value)
const month_int = parseInt(month.value)
const year_int = parseInt(year.value)


const days_in_html = document.querySelector('.days_result')
const months_in_html = document.querySelector('.months_result')
const years_in_html = document.querySelector('.years_result')


const today = new Date()


function calculate() {
    const date_default = new Date()
    let inputed_date = transformToDate(parseInt(day.value),parseInt(month.value),parseInt(year.value))
    let date_inputed = new Date(inputed_date)
    let difference = getDateDiff(date_inputed,date_default)


    let result_days = parseInt(difference.resulted_days)
    let result_months = parseInt(difference.resulted_months)
    let result_years = parseInt(difference.resulted_years)

    if (month.value === '' || day.value === '' || year.value === '') {
        document.querySelector('.campos-em-branco').classList.remove('invisibility')
        document.querySelector('.day-error').classList.add('invisibility')
        document.querySelector('.month-error').classList.add('invisibility')
    } 
    
    else if (parseInt(day.value) < 1 || parseInt(day.value) > 31) {
        document.querySelector('.day-error').classList.remove('invisibility')
        document.querySelector('.campos-em-branco').classList.add('invisibility')
        document.querySelector('.month-error').classList.add('invisibility')
    }
    
    else if (parseInt(month.value) < 1 || parseInt(month.value) > 12) {
        document.querySelector('.month-error').classList.remove('invisibility')
        document.querySelector('.day-error').classList.add('invisibility')
        document.querySelector('.campos-em-branco').classList.add('invisibility')
    }

    else if (isFutureDate(inputed_date)) {
        document.querySelector('.month-error').classList.add('invisibility')
        document.querySelector('.day-error').classList.add('invisibility')
        document.querySelector('.campos-em-branco').classList.add('invisibility')
        document.querySelector('.futureDate-error').classList.remove('invisibility')
    }
    
    else {
        document.querySelector('.futureDate-error').classList.add('invisibility')
        document.querySelector('.campos-em-branco').classList.add('invisibility')
        document.querySelector('.day-error').classList.add('invisibility')
        document.querySelector('.month-error').classList.add('invisibility')
        days_in_html.textContent = result_days
        months_in_html.textContent = result_months
        years_in_html.textContent = result_years
    }

}