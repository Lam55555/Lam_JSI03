/*  1.D 2.C 3.B 4.A 5.B 6.D 7.D 8.C  */

const m = [1,2,3,4,5,6,"hh","9",80,100]
// const m_number = m.filter(item => item !== "number")
const m_number = m.filter(element => typeof element === 'number')
console.log(m_number);
for(var i = 0; i<m_number.length; i++)
{
    const mSquared = Math.pow(m_number[i],2)
    console.log(mSquared);

}
