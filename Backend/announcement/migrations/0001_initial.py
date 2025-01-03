# Generated by Django 5.1.4 on 2024-12-30 05:06

import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('classes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Announcment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('body', models.TextField(default=' ')),
                ('date_creation', models.DateTimeField(default=django.utils.timezone.now)),
                ('class_assigned', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='classes.class')),
            ],
        ),
    ]
