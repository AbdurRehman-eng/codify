import React from 'react'

const Details = () => {
  return (
<>
    The challenge here is to read lines of input until you reach EOF, then number and print all lines of content.
    Hint: Javas Scanner.hasNext() method is helpful for this problem.
    <br /><br />
    Input Format
    <br /><br />
    Read some unknown lines of input from stdin(System.in) until you reach EOF; each line of input contains a non-empty String.
    <br /><br />
    Output Format
    <br /><br />
    For each line, print the line number, followed by a single space, and then the line content received as input.
    <br /><br />
    Sample Input
    <br /><br />
    <div className='bg-[#161618] border-white border-[1px] p-2 w-[298px] rounded-[10px]'>
    Hello world <br />
    I am a file <br />
    Read me until end-of-file.
    </div>
    <br /><br />
    Sample Output
    <br /><br />
    <div className='bg-[#161618] border-white border-[1px] p-2 w-[298px] rounded-[10px] mb-[10px]'>
    1. Hello world <br />
    2. I am a file <br />
    3. Read me until end-of-file.
    </div>
</>



  )
}

export default Details