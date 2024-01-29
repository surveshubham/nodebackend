import { Request, Response } from "express";

import DepartmentModel from "../models/department";

//Create new employee
export const createDepartment = async (req: Request, res: Response) => {
    try {

        const { depName }: any = req.body;

        if (depName == "") {
            return res.json({
                error: `Please enter department name`,
            });
        } else {

            let findDepQuery = {
                name: depName
            }

            let findDepartment = await DepartmentModel.findOne(findDepQuery);


            if (findDepartment) {
                return res.json({
                    error: `A department with name ${depName} already exists`,
                });
            }


            //Create department id ; 
            let depCount = await DepartmentModel.countDocuments();

            let depID = "DEPT001";

            if (depCount != 0) {
                if (depCount < 10) {
                    depID = "DEPT" + "00" + (depCount + 1);
                } else if (depCount < 100) {
                    depID = "DEPT" + "0" + (depCount + 1);
                } else {
                    depID = "DEPT" + (depCount + 1);
                }
            }

            //creating Department; 
            let departmentDetails = { 
                name: depName,
                departmentId: depID,
            }

            let department = await DepartmentModel.create(departmentDetails);

            // show success message here;
            res.json({ department });
        }

    } catch (error: any) {
        console.log("Error in creating department : ", error.toString());
        res
            .sendStatus(500)
            .json({ error: "Something went wrong, please try again later" });
        return;
    }
};
