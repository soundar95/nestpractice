import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { createTaskdto } from './dto/create-task.dto';
import { getTaskFilterdto } from './dto/get-task-filter.dto';
import { taskStatusdto } from './dto/update-taskstatus.dto';
import { task, taskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')                                                   //controller handles the incoming request and responses back and bound to specific path 
export class TasksController {
    constructor(private taskService:TasksService){}
    @Get()                                                             //handlers which handles the endpoint api and request methods
    getTask(@Query() filterdto:getTaskFilterdto):task[]{
        if(Object.keys(filterdto).length){
            return this.taskService.getTaskwithFilter(filterdto);
        }
        else{
            return this.taskService.getAllTask();
        }
    }
    @Post()
    createTask(@Body()CreateTaskdto:createTaskdto):task{
        return this.taskService.createTask(CreateTaskdto);
    }
    @Get('/:id')
    getTaskById(@Param('id')id:string):task{
        return this.taskService.getTaskById(id);
    }
    @Delete('/:id')
    deleteTaskByid(@Param('id')id:string):void{
        this.taskService.deleteTaskById(id);
    }
    @Patch('/:id/status')
    updateTaskById(@Param('id')id:string,@Body()updatetaskstatusdto:taskStatusdto):task{
        const {status}=updatetaskstatusdto;
        return this.taskService.updateTaskById(id,status);
    }

}
