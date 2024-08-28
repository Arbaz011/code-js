// -----print india time ------
let utcdate= Date.now(toString)
let inddate=new Date(utcdate).toLocaleString(undefined,
{
timeZone:'Asia/Kolkata'
});
console.log(inddate);

// ------another way
let newdate=Date.now()
newdate.toLocaleString('default',
    {
timeZone:'Asia/kolKata'
  }
);
console.log(newdate);




