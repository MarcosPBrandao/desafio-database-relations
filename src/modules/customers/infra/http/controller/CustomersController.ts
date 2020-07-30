import { Request, Response } from 'express';

import CreateCustomerService from '@modules/customers/services/CreateCustomerService';

import { container } from 'tsyringe';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    //const user_id = request.user.id;
    const { email, name } = request.body;
    //const parsedDate = parseISO(date.toISOString());

    const createCustomer = container.resolve(CreateCustomerService);

    const customer = await createCustomer.execute({
         email,
         name
    })

    return response.json(customer);
  }
}
