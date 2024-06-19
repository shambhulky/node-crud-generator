import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressService } from './address.service';
import { Crud, CrudController, CrudService } from "@nestjs-library/crud";
import { Address } from "./entities/address.entity";

@Crud({ entity: Address })
@Controller('address')
export class AddressController  implements CrudController<Address>{
  constructor(public readonly crudService: AddressService) {}
}
