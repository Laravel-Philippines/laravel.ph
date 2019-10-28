<?php

namespace App\Http\Requests\Publication;

use Carbon\Carbon;
use App\Models\Event;
use Illuminate\Foundation\Http\FormRequest;

class EventResourceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title'         =>  'required|max:255',
            'description'   =>  'required',
            'event_date'    =>  'required|date_format:Y-m-d H:i',
            'published'     =>  'nullable|boolean',
            'publisher'     =>  'required_if:published,1|exists:users,id',
            'sponsors'      =>  'nullable|array',
            'sponsors.*'    =>  'exists:sponsors,id',
        ];
    }

    /**
     * Persist the request to the storage.
     *
     * @param  App\Models\Event|null $event
     * @return App\Models\Event
     */
    public function persist(Event $event = null)
    {
        $event = $event ?? new Event;

        $event->title           =   $this->title;
        $event->description     =   $this->description;
        $event->event_date      =   $this->event_date;
        $event->published_at    =   $this->published ? Carbon::now() : null;
        $event->publisher_id    =   $this->publisher;

        $event->save();

        $event->sponsors()->sync($this->sponsors);

        return $event;
    }
}
