<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ComponentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return  [
            'id' => $this->id,
            'model' => $this->model,
            'price' => $this->price,
            'productable_id' => $this->productable_id,
            'productable_type' =>  $this->productable_type,
            'product_type_cro' => $this->product_type_cro,
            'discount' => $this->discount,
            'description' => $this->description,
            'productable_details' => $this->productable,

            // TODO remove this and use productable_details
            'socket_name' => $this->when($this->productable_type === 'App\\Models\\CPU' || $this->productable_type === 'App\\Models\\Motherboard', function () {
                return $this->productable->socket->name;
            }),

            'memory' => $this->when($this->productable_type === 'App\\Models\\GPU', function () {
                return $this->productable->memory;
            }),

            'cores' => $this->when($this->productable_type === 'App\\Models\\CPU', function () {
                return $this->productable->cores;
            }),

            'manufacturer' => $this->manufacturer,
            'images' =>  $this->images->pluck('url')->toArray()
        ];
    }
}
