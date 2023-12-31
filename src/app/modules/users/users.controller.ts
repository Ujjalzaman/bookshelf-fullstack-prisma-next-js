import { User } from '@prisma/client';
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { UserService } from './users.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.getSingleUser(req.params.id);
    sendResponse<User>(res, {
        statusCode: httpStatus.OK,
        message: "User Retrive Successfully !!",
        success: true,
        data: result
    })
})

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.getAllUsers(req.user as JwtPayload);
    sendResponse<User[] | User>(res, {
        statusCode: httpStatus.OK,
        message: "User Retrive Successfully !!",
        success: true,
        data: result
    })
})

const updateSingleUser = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.updateUser(req.params.id, req.body);
    sendResponse<User>(res, {
        statusCode: httpStatus.OK,
        message: "User Updated Successfully !!",
        success: true,
        data: result
    })
})

const deleteSingleUser = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.deleteUser(req.params.id);
    sendResponse<User>(res, {
        statusCode: httpStatus.OK,
        message: "User deleted Successfully !!",
        success: true,
        data: result
    })
})

export const UserController = {
    getSingleUser,
    updateSingleUser,
    deleteSingleUser,
    getAllUsers
}