
//https://goldenrod-moat-61f.notion.site/School-Management-17b79b0153fb43409ef2ed6b533320d9

let classObj = {
    "name" : "class A" ,
    "teacherName" : "Mary" ,
    "students" : [ 
        {
            "name" : "Ravi" ,
            "id" : "101" ,
            "marks" : [
                {"subject" : "English" , "mark" : 25}, 
                {"subject" : "Maths", "mark" : 48}, 
                {"subject" : "Physics", "mark" : 40}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 20}
            ]
        },
        {
            "name" : "Aju" ,
            "id" :  "102",
            "marks" : [
                {"subject" : "English" , "mark" : 35}, 
                {"subject" : "Maths", "mark" : 38}, 
                {"subject" : "Physics", "mark" : 33}, 
                {"subject" : "Chemistry", "mark" : 34},
                {"subject" : "Computer", "mark" : 30}
            ]
        },
        {
            "name" : "Mini SS" ,
            "id" : "103" ,
            "marks" : [
                {"subject" : "English" , "mark" : 12}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 18}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 40}
            ]
        },
        {
            "name" : "Binu" ,
            "id" : "104" ,
            "marks" : [
                {"subject" : "English" , "mark" : 49}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 47}, 
                {"subject" : "Chemistry", "mark" : 46},
                {"subject" : "Computer", "mark" : 50}
            ]
        }
    ]
}
// code

const printClassName = ()=>{
    console.log(classObj.name)
}

const printTeachersName = ()=>{
    console.log(classObj.teacherName)
}

const printStudentsNames = ()=>{
    classObj.students.forEach((student)=>{
        console.log(student.name)
    })
}

const printStudentIds = ()=>{
    classObj.students.forEach((student)=>{
        console.log(student.id)
    })
}

const printSubjectsOfOne = (id)=>{
    let student = classObj.students.find(student => student.id === id)
    student?.marks.forEach(subjectDetails => console.log(subjectDetails.subject))
    if(!student) console.log('student not found')
}

const printMarksOfOne = (id)=>{
    let student = classObj.students.find(student => student.id === id)
    student.marks.forEach(subjectDetails => console.log(subjectDetails.subject,subjectDetails.mark))
}

const averageMarkOfOne =(id)=>{
    let student = classObj.students.find(student => student.id === id)
    total=student.marks.reduce((total,value)=>total+=value.mark,0)
    number = student.marks.length
    average = total/number

    console.log(average)
}

const totalMarkOfOne =(id)=>{
    let student = classObj.students.find(student => student.id === id)
    total=student.marks.reduce((total,value)=>total+=value.mark,0)
     
    console.log(total)
}

const averageMarkOfSubject = (sub) =>{

    let {students} = classObj
    let total=0
    students.forEach((student)=>{
        student.marks.forEach((subject)=>{
            if(subject.subject==sub)
            total+=subject.mark
        })
    })
    average=total/students.length
    
    console.log("average",average)
}

const totalMarkOfSubject = (sub) =>{

    let { students } = classObj
    let total = 0 
    students.forEach((student) => {
        student.marks.forEach((subject) => {
            if(subject.subject === sub)
            total += subject.mark
        })
    })
    
    console.log("total",total)
}

//Destructuring students for future use
let { students } = classObj

const topperOfSub = (sub) =>{
    
    let current_max = 0
    let topper = ''
    students.forEach((student)=>{
            student.marks.forEach((subject)=>{
                if(subject.subject == sub && subject.mark > current_max)
                {
                    current_max = subject.mark
                    topper = student.name
                }
            })
        })
    
        console.log(topper)
}

const bottomOfSub = (sub) =>{
    
    let current_min = 100
    let bottom = ''
    students.forEach((student)=>{
            student.marks.forEach((subject)=>{
                if(subject.subject == sub && subject.mark < current_min)
                {
                    current_min = subject.mark
                    bottom = student.name
                }
            })
        })

        console.log(bottom)
}

const topper = ()=>{
    let max_total = 0
    let topper = ''
    students.forEach(student =>{
        let total = student.marks.reduce((total,value) => total += value.mark,0)
        if(total > max_total)
        {
            max_total = total
            topper = student.name
        }
    })
    
    console.log(topper,max_total)
}

const low_scorer = ()=>{
    let min_total = 500
    let lowScorer = ''
    students.forEach(student =>{
        let total = student.marks.reduce((total,value) => total += value.mark,0)
        if(total < min_total)
        {
            min_total = total
            lowScorer = student.name
        }
    })
    
    console.log(lowScorer,min_total)
}

const subjectWithHighAvg = ()=>{
    const aggregate = {"English":0,"Maths":0,"Physics":0,"Chemistry":0,"Computer":0}
    students.forEach(student =>{
        student.marks.forEach(sub=>{
            aggregate[sub.subject] += sub.mark
        })
    })
    let maxValue = 0
    let maxSub = ''
    for(key in aggregate){
        aggregate[key] = aggregate[key]/students.length
        if(aggregate[key] > maxValue){
            maxValue = aggregate[key]
            maxSub = key
        }
    }
    
    console.log(maxSub)
}

const totalMarkOfSubs = () =>{
    const aggregate = {"English":0,"Maths":0,"Physics":0,"Chemistry":0,"Computer":0}
    students.forEach(student =>{
    student.marks.forEach( sub => aggregate[sub.subject] += sub.mark)
    })
    return aggregate
}

const subjectWithLowAvg = ()=>{
    const aggregate = {"English":0,"Maths":0,"Physics":0,"Chemistry":0,"Computer":0}
    students.forEach(student =>{
        student.marks.forEach(sub=>{
            aggregate[sub.subject] += sub.mark
        })
    })

    let minValue = 100
    let minSub = ''
    for(key in aggregate){
        aggregate[key] = aggregate[key]/students.length
        if(aggregate[key] < minValue){
            minValue = aggregate[key]
            minSub = key
        }
    }
  
    console.log(minSub)
}

const averageofClass = ()=>{
    let total = 0
    students.forEach((student)=>{
        total += student.marks.reduce((total,value)=>total+=value.mark,0)
    })
    avg = total / students.length
    console.log(avg)
}

const totalofClass = ()=>{
    let total = 0
    students.forEach((student)=>{
        total += student.marks.reduce((total,value) => total += value.mark,0)
    })
   
    console.log(total)
}

const averageOfEachSub = () =>{
    totalMarks = totalMarkOfSubs()
    for(sub in totalMarks)
    totalMarks[sub] = totalMarks[sub] / students.length

    console.log(totalMarks)
}

const topperSubject = ()=>{
    const markList = totalMarkOfSubs()
    let topMark = 0
    let topSub = ''
    for(sub in markList)
    if(markList[sub] > topMark){
        topSub = sub
        topMark = markList[sub] 
    }
    
    console.log(topSub,topMark)
}

const lowerSubject = ()=>{
    const markList = totalMarkOfSubs()
    let lowMark = 500
    let lowSub = ''
    for(sub in markList)
    if(markList[sub] < lowMark){
        lowSub = sub
        lowMark = markList[sub] 
    }
    console.log(lowSub,lowMark)
}

const toppersByAvg = ()=>{
    let topper = []
    let markList = []
    let studentList = []
    students.forEach(student =>{
        let total = student.marks.reduce((total,value) => total += value.mark,0)
        total = total / student.marks.length
        markList.push(total)
        studentList.push(student.name)
    })
    highestAvg = Math.max(...markList)

    for(let i=0;i < markList.length;i++)
    markList[i] == highestAvg ? topper.push(studentList[i]):''

    console.log(topper,highestAvg)
}

const lowersByAvg = ()=>{
    let lower = []
    let markList = []
    let studentList = []
    students.forEach(student =>{
        let total = student.marks.reduce((total,value)=>total+=value.mark,0)
        total = total / student.marks.length
        markList.push(total)
        studentList.push(student.name)
    })
    lowestAvg = Math.min(...markList)

    for(let i=0;i < markList.length;i++)
    markList[i] == lowestAvg ? lower.push(studentList[i]):''

    console.log(lower,lowestAvg)
}

const toppers = ()=>{
    let topper=[]
    let markList =[]
    let studentList = []
    students.forEach(student =>{
        let total = student.marks.reduce((total,value)=>total+=value.mark,0)
        markList.push(total)
        studentList.push(student.name)
    })
    highestScore = Math.max(...markList)

    for(let i=0;i < markList.length;i++)
    (markList[i] == highestScore ) && topper.push(studentList[i])

    console.log(topper,highestScore)
}

const lowers = ()=>{
    let lower = []
    let markList = []
    let studentList = []
    students.forEach(student =>{
        let total = student.marks.reduce((total,value)=>total+=value.mark,0)
        markList.push(total)
        studentList.push(student.name)
    })
    lowestScore = Math.min(...markList)

    for(let i = 0;i < markList.length;i++)
    markList[i] == lowestScore ? lower.push(studentList[i]):''

    console.log(lower,lowestScore)
}

const filterStudentsMinLimit = (mark_limit,sub)=>{
    let count = 0
    students.forEach( student => {
        found = student.marks.find(subject => {
            if(subject.subject == sub && subject.mark < mark_limit )
            return true
        })
        found?count++:''
    })

    console.log(`number of students below ${mark_limit} in ${sub} : `,count)
}

const filterStudentsMaxLimit = (mark_limit,sub)=>{
    let count = 0
    students.forEach( student => {
        found = student.marks.find(subject => {
            if(subject.subject == sub && subject.mark > mark_limit )
            return true
        })
        found?count++:''
    })

    console.log(`number of students above ${mark_limit} in ${sub} : `,count)
}

const filterStudentsByLowerLimit = (min_score) => {
    let count = 0;
    students.forEach((student) => {
        found = student.marks.find((markDetails) => markDetails.mark < min_score)
        found ? '' : count++
    })

    console.log(`number of students scored above ${min_score} in all`,count)
}

const filterStudentsByUpperLimit = (min_score) => {
    let count = 0;
    students.forEach((student) => {
        found = student.marks.find((markDetails) => markDetails.mark > min_score)
        found ? '' : count++
    })

    console.log(`number of students scored below ${min_score} in all`,count)
}

const percentageOfStudentsAbove = (sub,mark) => {
    let count = 0;
    students.forEach((student)=>{
        found = student.marks.find(details => details.subject == sub && details.mark > mark)
        found ? count++ : ''
    })
    percentage = (count / students.length) * 100

    console.log(`percentage scoring above ${mark} in ${sub}`,percentage)
}

const percentageOfStudentsBelow = (sub,mark) => {
    let count = 0;
    students.forEach((student)=>{
        found = student.marks.find(details => details.subject == sub && details.mark < mark)
        found ? count++ : ''
    })
    percentage = (count / students.length) * 100

    console.log(`percentage scoring below ${mark} in ${sub}`,percentage)
}

const percentageOfStudentsAboveTotal = (mark) => {
    let count = 0;
    students.forEach((student) => {
        found = student.marks.find((markDetails) => markDetails.mark < mark)
        found ? '' : count++
    })
    percentage = (count / students.length) * 100

    console.log(`percentage of students scored above ${mark} in all`,percentage)
}

const percentageOfStudentsBelowTotal = (mark) => {
    let count = 0;
    students.forEach((student) => {
        found = student.marks.find((markDetails) => markDetails.mark > mark)
        found ? '' : count++
    })
    percentage = (count / students.length) * 100

    console.log(`percentage of students scored below ${mark} in all`,percentage)
}

const studentsWithHighPercent = () =>{
    let studentList = []
    let percentList = []
    const maximumMark = 50

    students.forEach((student) => {
        let percentage = student.marks.reduce((total,value) => total += value.mark,0)
        percentage = (percentage / (student.marks.length * maximumMark)) * 100
        percentList.push(percentage)
        studentList.push(student.name)
    })
    max_value = Math.max(...percentList)

    for( let i = 0; i<percentList.length; i++)
        percentList[i] == max_value && console.log(studentList[i])
}

const studentsWithLowPercent = () =>{
    let studentList = []
    let percentList = []
    const maximumMark = 50

    students.forEach((student) => {
        let percentage = student.marks.reduce((total,value) => total += value.mark,0)
        percentage = (percentage / (student.marks.length * maximumMark)) * 100
        percentList.push(percentage)
        studentList.push(student.name)
    })
    min_value = Math.min(...percentList)

    for( let i = 0; i<percentList.length; i++)
        percentList[i] == min_value && console.log(studentList[i])
}

const subjectsWithHighestPercent = () =>{
    const maximumMark = 50
    let percentList = Object.values(totalMarkOfSubs())
    let subjectList = Object.keys(totalMarkOfSubs())
    percentList.forEach((sub,idx) => percentList[idx] = (sub / (students.length * maximumMark)) * 100)
    max_value = Math.max(...percentList)

    for( let i = 0; i<percentList.length; i++)
        percentList[i] == max_value && console.log(subjectList[i],max_value)
}

const subjectsWithLowestPercent = () =>{
    const maximumMark = 50
    let percentList = Object.values(totalMarkOfSubs())
    let subjectList = Object.keys(totalMarkOfSubs())
    percentList.forEach((sub,idx) => percentList[idx] = (sub / (students.length * maximumMark)) * 100)
    min_value = Math.min(...percentList)

    for( let i = 0; i<percentList.length; i++)
        percentList[i] == min_value && console.log(subjectList[i],min_value)
}

const studentsWithHighestPercentIn = (sub) =>{
    
    let maximumMark = 50
    let percentList = []
    let studentList = []

    students.forEach((student)=>{
        percentage = student.marks.find(details => details.subject == sub).mark
        percentage = (percentage / maximumMark) * 100
        percentList.push(percentage)
        studentList.push(student.name)
    })
    max_value = Math.max(...percentList)

    for( let i =0; i<percentList.length; i++)
        percentList[i] == max_value && console.log(studentList[i])
}

const studentsWithLowestPercentIn = (sub) =>{
    
    let maximumMark = 50
    let percentList = []
    let studentList = []

    students.forEach((student)=>{
        percentage = student.marks.find(details => details.subject == sub).mark
        percentage = (percentage / maximumMark) * 100
        percentList.push(percentage)
        studentList.push(student.name)
    })
    min_value = Math.min(...percentList)

    for( let i =0; i<percentList.length; i++)
        percentList[i] == min_value && console.log(studentList[i])
}



//printAll()
// const test = ()=>{
//     students.forEach(student=>{
//         console.log(Object.values(student.marks[0]))
//     })
// }
// test()

// function calls

// printClassName()
// printTeachersName()
// printStudentsNames()
// printStudentIds()
//printSubjectsOfOne("103")
//printMarksOfOne("102")
//averageMarkOfOne("101")
//totalMarkOfOne("103")
// averageMarkOfSubject('Computer')
// totalMarkOfSubject("Computer")
//topperOfSub("Physics")
//bottomOfSub("English")
//topper()
//low_scorer()
// subjectWithHighAvg()
// subjectWithLowAvg()
// averageofClass()
// totalofClass()
// averageOfEachSub()
// console.log(totalMarkOfSubs())
//topperSubject()
//lowerSubject()
// toppersByAvg()
// lowersByAvg()
// toppers()
// lowers()
// filterStudentsMinLimit(30,"English")
// filterStudentsMaxLimit(30,"English")
//filterStudentsByLowerLimit(30)
//filterStudentsByUpperLimit(45)
// percentageOfStudentsAbove("English",30)
// percentageOfStudentsBelow("English",30)
//percentageOfStudentsAboveTotal(30)
//percentageOfStudentsBelowTotal(40)
// studentsWithHighPercent()
// studentsWithLowPercent()
// subjectsWithHighestPercent()
// subjectsWithLowestPercent()
//studentsWithHighestPercentIn("Maths")
//studentsWithLowestPercentIn("English")
//