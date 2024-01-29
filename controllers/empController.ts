import { Request, Response } from "express";
import EmployeeModel from "../models/employee";
import DepartmentModel from "../models/department";
import ProjectModel from "../models/project";
// import Employee_Project_Tracker from "../models/employee_project_tracker";

//Create new employee
export const createEmployee = async (req: Request, res: Response) => {
    try {

        const { fName, lName, departmentName, age }: any = req.body;

        //validation on creating employee
        if (fName == "") {
            return res.json({
                error: `please enter first name`,
            });
        } else if (lName == "") {
            return res.json({
                error: `please enter last name`,
            });
        } else if (age == undefined) {
            return res.json({
                error: `please enter age`,
            });
        }

        //find department;
        let departmentQuery = { name: departmentName };

        let deparmentID;

        if (departmentName != undefined) {

            let department = await DepartmentModel.findOne(departmentQuery);

            if (!department) {
                return res.json({
                    error: `A department name ${departmentName} does not exist.`,
                });
            } else {

                deparmentID = department?.departmentId;
            }
        }

        //Create Emp id ; 
        let empCount = await EmployeeModel.countDocuments();

        let empID = "Emp001";

        if (empCount != 0) {

            if (empCount < 10) {
                empID = "Emp" + "00" + (empCount + 1);
            } else if (empCount < 100) {
                empID = "Emp" + "0" + (empCount + 1);
            } else {
                empID = "Emp" + (empCount + 1);
            }

        }

        //creating employee; 
        let employeeDetails = {
            employeeId: empID,
            fNAme: fName,
            lName: lName,
            onBoardDate: Date.now(),
            age: age,
            departmentId: deparmentID
        }

        let employee = await EmployeeModel.create(employeeDetails);

        // show success message here;
        res.json({ employee });

    } catch (error: any) {
        console.log("Error in creating employee : ", error.toString());
        res
            .sendStatus(500)
            .json({ error: "Something went wrong, please try again later" });
        return;
    }
};


export const assignProjectToEmp = async (req: Request, res: Response) => {
    try {

        const { empID , projectName  }: any = req.body;

        if(empID == ""){
            return res.json({
                error: `Please enter employee ID`,
            });
        }else if(projectName == ""){
            return res.json({
                error: `Please enter projectName `,
            });
        }

        //find emp with empid;
        





    } catch (error: any) {
        console.log("Error in assignProjectToEmp : ", error.toString());
        res
            .sendStatus(500)
            .json({ error: "Something went wrong, please try again later" });
        return;
    }
}
