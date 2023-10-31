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

const printTeacherName = ()=>{
    console.log(classObj.teacherName)
}

const printStudentNames = ()=>{
    classObj.students.forEach((student)=>{
        console.log(student.name)
    })
}

const printStudentIds = ()=>{
    classObj.students.forEach((student)=>{
        console.log(student.id)
    })
}

const printSubjectsOfOne = (name)=>{
    let {students} = classObj
    
    students.forEach((student)=> {
        if(student.name == name) 
            student.marks.forEach(subject => console.log(subject.subject))
    })
}

const printMarksOfOne = (name)=>{
    let {students} = classObj
    
    students.forEach((student)=> {
        if(student.name == name) 
            student.marks.forEach(subject => console.log(subject.subject,subject.mark))
    })
}

const averageMarkOfOne =(name)=>{
    let {students} = classObj
    students.forEach((student)=>{
        if(student.name == name)
        {
            total=student.marks.reduce((total,value)=>total+=value.mark,0)
            number = student.marks.length
            average = total/number
        }
    })
    console.log(average)

}
const totalMarkOfOne =(name)=>{
    let {students} = classObj
    students.forEach((student)=>{
        if(student.name == name)
        total=student.marks.reduce((total,value)=>total+=value.mark,0)
    })
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

    let {students} = classObj
    let total=0
    students.forEach((student)=>{
        student.marks.forEach((subject)=>{
            if(subject.subject==sub)
            total+=subject.mark
        })
    })
    console.log("total",total)
}

//Destructuring students for future use
let {students} = classObj

const topperOfSub = (sub) =>{
    
    let current_max=0
    let topper=''
    students.forEach((student)=>{
            student.marks.forEach((subject)=>{
                if(subject.subject == sub && subject.mark>current_max)
                {
                    current_max=subject.mark
                    topper=student.name
                }
            })
        })
        console.log(topper)
}

const bottomOfSub = (sub) =>{
    
    let current_min=100
    let bottom=''
    students.forEach((student)=>{
            student.marks.forEach((subject)=>{
                if(subject.subject == sub && subject.mark<current_min)
                {
                    current_min=subject.mark
                    bottom=student.name
                }
            })
        })
        console.log(bottom)
}

const topper = ()=>{
    let max_total = 0
    let topper=''
    students.forEach(student =>{
        let total = student.marks.reduce((total,value)=>total+=value.mark,0)
        if(total>max_total)
        {
            max_total=total
            topper=student.name
        }
    })
    console.log(topper,max_total)
}

const low_scorer = ()=>{
    let min_total = 500
    let lowScorer=''
    students.forEach(student =>{
        let total = student.marks.reduce((total,value)=>total+=value.mark,0)
        if(total<min_total)
        {
            min_total=total
            lowScorer=student.name
        }
    })
    console.log(lowScorer,min_total)
}

const subjectWithHighAvg = ()=>{
    const aggregate = {"English":0,"Maths":0,"Physics":0,"Chemistry":0,"Computer":0}
    students.forEach(student =>{
        student.marks.forEach(sub=>{
            aggregate[sub.subject] +=sub.mark
        })
    })

    let maxValue = 0
    let maxSub = ''
    for(key in aggregate){
        aggregate[key] = aggregate[key]/students.length
        if(aggregate[key] > maxValue){
            maxValue=aggregate[key]
            maxSub = key
        }
    }
    console.log(maxSub)
}

const subjectWithLowAvg = ()=>{
    const aggregate = {"English":0,"Maths":0,"Physics":0,"Chemistry":0,"Computer":0}
    students.forEach(student =>{
        student.marks.forEach(sub=>{
            aggregate[sub.subject] +=sub.mark
        })
    })

    let minValue = 100
    let minSub = ''
    for(key in aggregate){
        aggregate[key] = aggregate[key]/students.length
        if(aggregate[key] < minValue){
            minValue=aggregate[key]
            minSub = key
        }
    }
    console.log(minSub)
}

// function calls

// printClassName()
// printTeacherName()
// printStudentNames()
// printStudentIds()
//printSubjectsOfOne('Ravi')
//printMarksOfOne("Binu")
//averageMarkOfOne("Binu")
//totalMarkOfOne("Mini SS")
// averageMarkOfSubject('Computer')
// totalMarkOfSubject("Computer")
//topperOfSub("Physics")
//bottomOfSub("English")
//topper()
//low_scorer()
// subjectWithHighAvg()
// subjectWithLowAvg()
// dededede