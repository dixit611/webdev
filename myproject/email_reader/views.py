from django.shortcuts import render, get_object_or_404, redirect
from .models import EmailData
from .forms import EmailDataForm, EmailSearchForm

def home(request):
    form = EmailSearchForm(request.POST or None)
    email = None

    if request.method == 'POST' and form.is_valid():
        email_id = form.cleaned_data['email_id']
        email = EmailData.objects.filter(email_id=email_id).first()

    return render(request, 'email_reader/search_email.html', {
        'form': form,
        'email': email,
    })

def email_list(request):
    emails = EmailData.objects.all()
    return render(request, 'email_reader/email_list.html', {'emails': emails})

def email_detail(request, pk):
    email = get_object_or_404(EmailData, pk=pk)
    return render(request, 'email_reader/email_detail.html', {'email': email})

def email_create(request):
    if request.method == 'POST':
        form = EmailDataForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('email_list')
    else:
        form = EmailDataForm()
    return render(request, 'email_reader/email_form.html', {'form': form})

def email_update(request, pk):
    email = get_object_or_404(EmailData, pk=pk)
    if request.method == 'POST':
        form = EmailDataForm(request.POST, instance=email)
        if form.is_valid():
            form.save()
            return redirect('email_list', pk=email.pk)
    else:
        form = EmailDataForm(instance=email)
    return render(request, 'email_reader/email_form.html', {'form': form})

def email_delete(request, pk):
    email = get_object_or_404(EmailData, pk=pk)
    if request.method == 'POST':
        email.delete()
        return redirect('email_list')
    return render(request, 'email_reader/email_confirm_delete.html', {'email': email})

def search_email(request):
    form = EmailSearchForm(request.POST or None)
    email = None

    if request.method == 'POST' and form.is_valid():
        email_id = form.cleaned_data['email_id']
        email = get_object_or_404(EmailData, email_id=email_id)

    return render(request, 'email_reader/search_email.html', {
        'form': form,
        'email': email,
    })
