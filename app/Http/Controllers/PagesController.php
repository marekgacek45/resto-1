<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index(){
        return inertia('Index');
    }
    public function menu(){
        return inertia('Menu');
    }
    public function about(){
        return inertia('About');
    }
    public function reservation(){
        return inertia('Reservation');
    }
    public function contact(){
        return inertia('Contact');
    }
}
