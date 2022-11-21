import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Example} from "../entity/Example";
import {Controller} from '../decorator/Controller';
import {Route} from '../decorator/Route';
import {IsNotEmpty, Max, Min, validate, ValidatorOptions} from 'class-validator';


@Controller('/example')
export class ExampleController {

    private entityRepository = getRepository(Example);
    private validOptions: ValidatorOptions;

}
