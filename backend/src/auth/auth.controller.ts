import {
    Controller,
    Post,
    Body,
    Res,
    Get,
    Req,
    UnauthorizedException,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { UserDocument } from 'src/users/schemas/user/user';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private usersService: UsersService
    ) { }

    @Post('login')
    async login(@Body() body: any, @Res({ passthrough: true }) res: Response) {
        const { email, password } = body;

        const user = await this.usersService.findByEmail(email) as UserDocument;
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const valid = await this.usersService.comparePasswords(password, user.password);
        if (!valid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const token = this.authService.generateToken({ id: user._id, email: user.email });

        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'lax',
            secure: true,
            maxAge: 60 * 60 * 1000,
        });

        return { message: 'Login successful' };
    }


    @Post('logout')
    logout(@Res({ passthrough: true }) res: Response) {
        res.clearCookie('token');
        return { message: 'Logged out' };
    }

    @Get('me')
    me(@Req() req: Request) {
        const token = (req as Request).cookies['token'];
        if (!token) {
            throw new UnauthorizedException('No token found');
        }

        const decoded = this.authService.verifyToken(token);
        if (!decoded) {
            throw new UnauthorizedException('Invalid or expired token');
        }

        return decoded;
    }
};