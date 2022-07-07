import { Injectable, NotFoundException } from '@nestjs/common';
import { task, taskStatus } from './task.model';
import {v4 as uuid} from 'uuid';
import { createTaskdto } from './dto/create-task.dto';
import { getTaskFilterdto } from './dto/get-task-filter.dto';
import { filter } from 'rxjs';

@Injectable()                                 //can be injected into constructor if decored as @injectible()                                    //services are the main source of business logic
export class TasksService {
    private Tasks=[];
    getAllTask():task[]{
        return this.Tasks;
    }
    getTaskwithFilter(filterdto:getTaskFilterdto):task[]{
        const {status,search}=filterdto;
        let tasks=this.getAllTask();
        if(status){
            tasks=tasks.filter((task)=>task.status===status)

        }
        if(search){
            tasks=tasks.filter((task)=>{
            if(task.title.includes(search)||task.description.includes(search)){
                return true;
            }
            else 
            return false;
        });
        }
        return tasks;
    }
    createTask(CreateTaskdto:createTaskdto):task{
        const {title,description}=CreateTaskdto;
        const task:task={
     id:uuid(),
     title,
     description,
     status:taskStatus.OPEN,
    }
    this.Tasks.push(task);
    return task;
    }
   getTaskById(id:string):task{
    let found = this.Tasks.find((task)=>task.id===id);
    if(!found){
        throw new NotFoundException();
    }
    else{
        return found;
    }
   }
   deleteTaskById(id:string):void{
   const found=this.getTaskById(id);
   this.Tasks= this.Tasks.filter((task)=>task.id!==id);
   }
   updateTaskById(id:string,status:taskStatus):task{
    const task=this.getTaskById(id);
    task.status=status;
    return task;
   }
}
