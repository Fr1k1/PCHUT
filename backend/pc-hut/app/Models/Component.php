<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Component extends Model
{
    use HasFactory;


    protected $table = 'component';

    protected $fillable = ['productable_id', 'productable_type', 'manufacturer_id', 'model',  'price', 'description'];


    public function productable(): MorphTo
    {
        return $this->morphTo();
    }

    public function manufacturer(): BelongsTo
    {
        return $this->belongsTo(Manufacturer::class, 'manufacturer_id');
    }
}
