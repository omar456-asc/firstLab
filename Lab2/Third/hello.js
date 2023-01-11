var clock = Number(prompt("Enter Clock to convert"));
if (clock == 0)
{
    clock+=12;
    document.write(`${clock} AM`);
}
else if(clock > 12)
{
    clock-=12;
    document.write(`${clock} PM`);

}
else if(clock ==12)
{
    document.write(`${clock} PM`);
}
else
{
    document.write(`${clock} AM`);
}