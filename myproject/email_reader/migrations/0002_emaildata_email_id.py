# Generated by Django 5.0.7 on 2024-07-31 09:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('email_reader', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='emaildata',
            name='email_id',
            field=models.CharField(default='default_email_id', max_length=255, unique=True),
            preserve_default=False,
        ),
    ]
