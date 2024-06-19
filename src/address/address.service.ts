import { Injectable } from '@nestjs/common';
import { Address } from "./entities/address.entity";
import { CrudService } from "@nestjs-library/crud";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class AddressService extends CrudService<Address>{
  constructor(@InjectRepository(Address) repository: Repository<Address>) {
    super(repository);
  }

}
