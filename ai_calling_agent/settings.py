from pathlib import Path
import os

# --------------------------------------------------
# BASE DIRECTORY
# --------------------------------------------------
BASE_DIR = Path(__file__).resolve().parent.parent

# --------------------------------------------------
# SECURITY SETTINGS
# --------------------------------------------------

SECRET_KEY = os.getenv("DJANGO_SECRET_KEY", "django-insecure-change-this-key")
DEBUG = os.getenv("DJANGO_DEBUG") == "True"  # ✅ IMPORTANT for Railway dev

ALLOWED_HOSTS = ['*']   # ✅ Railway requires this

# --------------------------------------------------
# APPLICATION DEFINITION
# --------------------------------------------------
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'core',
]

# --------------------------------------------------
# MIDDLEWARE
# --------------------------------------------------
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# --------------------------------------------------
# URL CONFIG
# --------------------------------------------------
ROOT_URLCONF = 'ai_calling_agent.urls'

# --------------------------------------------------
# TEMPLATES
# --------------------------------------------------
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# --------------------------------------------------
# WSGI
# --------------------------------------------------
WSGI_APPLICATION = 'ai_calling_agent.wsgi.application'

# --------------------------------------------------
# DATABASE
# --------------------------------------------------
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# --------------------------------------------------
# PASSWORD VALIDATION
# --------------------------------------------------
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# --------------------------------------------------
# LANGUAGE & TIMEZONE
# --------------------------------------------------
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'Asia/Kolkata'
USE_I18N = True
USE_TZ = True

# --------------------------------------------------
# STATIC FILES
# --------------------------------------------------

from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent.parent

STATIC_URL = '/static/'

# Where collectstatic will put files (DESTINATION)
STATIC_ROOT = BASE_DIR / 'staticfiles'

# Where Django will SEARCH for static files (SOURCE)
STATICFILES_DIRS = [
    BASE_DIR / 'static',   # only if you have a /static folder
]


# --------------------------------------------------
# AUTH REDIRECTS
# --------------------------------------------------
LOGIN_URL = 'login'
LOGIN_REDIRECT_URL = 'dashboard'
LOGOUT_REDIRECT_URL = 'login'

# --------------------------------------------------
# DEFAULT PRIMARY KEY
# --------------------------------------------------
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
