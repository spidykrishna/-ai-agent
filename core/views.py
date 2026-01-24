from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required


def home(request):
    return render(request, 'core/index.html')


def features(request):
    return render(request, 'core/features.html')


def pricing(request):
    return render(request, 'core/pricing.html')


def solutions(request):
    return render(request, 'core/solutions.html')


def contact(request):
    return render(request, 'core/contact.html')


def login_view(request):
    if request.method == "POST":
        email = request.POST['email']
        password = request.POST['password']

        user = authenticate(username=email, password=password)
        if user:
            login(request, user)
            return redirect('dashboard')

        return render(request, 'core/login.html', {
            'error': 'Invalid credentials'
        })

    return render(request, 'core/login.html')


def signup_view(request):
    if request.method == "POST":
        email = request.POST['email']
        password = request.POST['password']
        confirm = request.POST['confirm']

        if password != confirm:
            return render(request, 'core/signup.html', {
                'error': 'Passwords do not match'
            })

        if User.objects.filter(username=email).exists():
            return render(request, 'core/signup.html', {
                'error': 'User already exists'
            })

        user = User.objects.create_user(
            username=email,
            email=email,
            password=password
        )
        login(request, user)
        return redirect('dashboard')

    return render(request, 'core/signup.html')


def logout_view(request):
    logout(request)
    return redirect('login')


@login_required
def dashboard(request):
    return render(request, 'core/dashboard.html', {
        'email': request.user.email
    })
def demo(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        company = request.POST.get("company")
        demo_type = request.POST.get("demo_type")

        # later: save to database / email
        print(name, email, company, demo_type)

    return render(request, 'core/demo.html')
