'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulazione registrazione (da sostituire con API call)
        console.log('Dati registrazione:', formData);
        router.push('/authentication/login/cover-custom'); // Redirect al login custom
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">Registrati su Unda</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nome</label>
                            <Input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Inserisci il tuo nome" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <Input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Inserisci la tua email" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <Input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Inserisci una password" />
                        </div>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            Registrati
                        </Button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Hai già un account? <Link href="/authentication/login/cover-custom" className="text-blue-600 hover:underline">Accedi</Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
