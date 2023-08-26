import { email, minLength, number, object, optional, string } from 'valibot';

export const newUserSchema = object({
  email: string('Your email must be a string', [
    email('The email address is badly formatted.'),
  ]),
  username: string(),
  password: string('Your password must be a string.', [
    minLength(1, 'Please enter your password.'),
    minLength(8, 'You password must have 8 characters or more.'),
  ]),
  rol_id: number(),
});

export const patchUserSchema = object({
  email: optional(
    string('Your email must be a string', [
      email('The email address is badly formatted.'),
    ]),
  ),
  username: optional(string()),
  password: optional(
    string('Your password must be a string.', [
      minLength(8, 'You password must have 8 characters or more.'),
    ]),
  ),
  rol_id: optional(number()),
});
